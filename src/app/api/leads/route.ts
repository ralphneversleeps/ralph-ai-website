import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

async function getLeads(): Promise<unknown[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, agencyName, clientCount, painPoint, source } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      email,
      name: name || null,
      agencyName: agencyName || null,
      clientCount: clientCount || null,
      painPoint: painPoint || null,
      source: source || 'website',
      timestamp: new Date().toISOString(),
    };

    const leads = await getLeads();
    leads.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, message: "We'll be in touch within 24 hours." });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET() {
  const leads = await getLeads();
  return NextResponse.json({ count: leads.length, leads });
}
