'use client';
import React from 'react';

import {useState} from 'react';

function DrpCalc() {
    const [ticker, setTicker] = useState('');
    const [shares, setShares] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [parsed, setParsed] = useState<any[]>([]);


    async function handleSubmit() {
        const res = await fetch(`/api?ticker=${encodeURIComponent(ticker)}&shares=${encodeURIComponent(shares)}&purchaseDate=${encodeURIComponent(purchaseDate)}`);
        const data = await res.json();
        setParsed(data.parsed);

        setTicker('');
        setShares('');
        setPurchaseDate('');
    }


    return (
        <div className="input1">
            <input type="text" className="input2" placeholder="Ticker (e.g., AAPL)" value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} />
            <input type="number" className="input2" placeholder="Shares Bought" value={shares} onChange={(e) => setShares(e.target.value)} />
            <input type="date" className="input2" placeholder="Date Bought" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} /><br></br>
            <button type="submit" className="input2 sub" onClick={handleSubmit}>Submit</button>
            {parsed.length > 0 && (
            <table className="tableFormat">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Dividend Per Share</th>
                    <th>Close Price</th>
                    <th>Shares Before</th>
                    <th>New Shares</th>
                    <th>Shares After</th>
                    <th>Cash Dividend</th>
                    </tr>
                </thead>
                <tbody>
                    {parsed.map((row: any, idx: number) => (
                    <tr key={idx}>
                        <td>{row.date}</td>
                        <td>${row.amount.toFixed(2)}</td>
                        <td>${row.clsAmt.toFixed(2)}</td>
                        <td>{row.oldshares.toFixed(2)}</td>
                        <td>{row.newShares.toFixed(2)}</td>
                        <td>{row.sharesAfter.toFixed(2)}</td>
                        <td>{row.divUpdateAmt.toFixed(2)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default DrpCalc;
