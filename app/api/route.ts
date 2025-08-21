import { NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const ticker = searchParams.get("ticker")?.toUpperCase();
    const shares = Number(searchParams.get("shares"));
    const purchaseDate = searchParams.get("purchaseDate");

    if (!ticker) {
        return NextResponse.json(
            { error: "No ticker provided"},
            { status: 400 }
        );
    }

    if (!shares) {
        return NextResponse.json(
            { error : "No shares provided"},
            { status: 400 }
        )
    }

    if (!purchaseDate) {
        return NextResponse.json(
            { error : "No date provided"},
            { status: 400 }
        )
    }

    const queryOptionsDiv: any = { 
        period1: new Date(purchaseDate),
        period2: new Date(),
        interval: "1d",
        events: "dividends"
    };

    const r2: any = await yahooFinance.chart(ticker, queryOptionsDiv);
    const dividends = r2.events?.dividends;
    const parsed = await Promise.all(
        Object.values(dividends).map(async (div: any) => {
        const divDate = new Date(div.date * 1000).toISOString().split("T")[0];
        const clsAmt = await closeAmount(divDate, ticker);
        return {
            date: divDate,
            amount: div.amount,
            divAmt: div.amount * shares,
            clsAmt
        };        
    }));

    return NextResponse.json({ ticker, shares, parsed });
}

async function closeAmount(givenDate: string, givenTicker: string) {

    const queryOptions: any = { 
        period1: new Date(givenDate),
        period2: new Date(),
        interval: "1d",
    };

    const r3: any = await yahooFinance.chart(givenTicker, queryOptions);
    const closeAmt = r3.quotes?.[0]?.close; // null if missing

    return closeAmt;
}
 


