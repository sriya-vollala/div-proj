'use client';
import React from 'react';

import {useState} from 'react';

function TickerForm() {
    const [ticker, setTicker] = useState('');
    const [shares, setShares] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [result, setResult] = useState<string>("");

    async function handleSubmit() {
        setResult("");
        const res = await fetch(`/api?ticker=${encodeURIComponent(ticker)}&shares=${encodeURIComponent(shares)}&purchaseDate=${encodeURIComponent(purchaseDate)}`);
        const data = await res.json();

        const divList = (data.parsed)
            .map((d: any, idx: number) => {
                return `Symbol: ${data.ticker} Date: ${d.date} Dividend Per Share: $${d.amount}
                Shares: ${data.shares}, Dividend Amount: ${d.divAmt} ${d.clsAmt}`;    
            }
            );
        


        setResult(`${divList}`);
    }


    return (
        <div>
            <input type="text" placeholder="Ticker (e.g., APPL)" value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} />
            <input type="number" placeholder="Number of Shares Bought" value={shares} onChange={(e) => setShares(e.target.value)} />
            <input type="date" placeholder="Date Bought" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} /><br></br>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            {result && <p>{result}</p>}
        </div>
    )
}

export default TickerForm;
