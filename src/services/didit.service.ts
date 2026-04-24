import crypto from "crypto";

const DIDIT_API_BASE = "https://verification.didit.me";

export interface DiditSession {
  session_id: string;
  session_token: string;
  verification_url: string;
  status: string;
}

export interface DiditWebhookPayload {
  session_id: string;
  status: string;
  webhook_type: string;
  vendor_data: string;
  decision?: Record<string, unknown>;
}

export const diditService = {
  async createSession(params: {
    vendorData: string;
    callback: string;
    email?: string;
  }): Promise<DiditSession> {
    const workflowId = process.env.DIDIT_WORKFLOW_ID;
    const apiKey = process.env.DIDIT_API_KEY;

    if (!workflowId || !apiKey) {
      throw new Error("Didit credentials not configured (DIDIT_API_KEY, DIDIT_WORKFLOW_ID)");
    }

    const body: Record<string, unknown> = {
      workflow_id: workflowId,
      callback: params.callback,
      vendor_data: params.vendorData,
    };

    if (params.email) {
      body.contact_details = { email: params.email };
    }

    const response = await fetch(`${DIDIT_API_BASE}/v3/session/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Didit API error ${response.status}: ${errorText}`);
    }

    return response.json() as Promise<DiditSession>;
  },

  verifyWebhookSignature(
    rawBody: string,
    signature: string,
    timestamp: string
  ): boolean {
    const secret = process.env.DIDIT_WEBHOOK_SECRET;
    if (!secret || !signature || !timestamp) return false;

    const currentTime = Math.floor(Date.now() / 1000);
    if (Math.abs(currentTime - parseInt(timestamp, 10)) > 300) return false;

    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    try {
      return crypto.timingSafeEqual(
        Buffer.from(expected, "hex"),
        Buffer.from(signature, "hex")
      );
    } catch {
      return false;
    }
  },

  mapStatusToInternal(
    diditStatus: string
  ): "NOT_VERIFIED" | "PENDING" | "VERIFIED" | "REJECTED" | null {
    switch (diditStatus) {
      case "Approved":
        return "VERIFIED";
      case "Declined":
        return "REJECTED";
      case "In Progress":
      case "In Review":
      case "Not Started":
      case "Resubmitted":
        return "PENDING";
      case "Expired":
      case "Abandoned":
      case "Kyc Expired":
        return "NOT_VERIFIED";
      default:
        return null;
    }
  },
};
