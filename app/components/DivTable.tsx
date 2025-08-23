'use client';
import React from 'react';

import {useState} from 'react';

function TickerForm() {
    const [ticker, setTicker] = useState('');
    const [shares, setShares] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [rows, setRows] = useState<any[]>([]);

    async function handleSubmit() {
        const res = await fetch(`/api?ticker=${encodeURIComponent(ticker)}&shares=${encodeURIComponent(shares)}&purchaseDate=${encodeURIComponent(purchaseDate)}`);
        const data = await res.json();
        
        const newRows = data.parsed.map((d: any) => ({
            ticker: data.ticker,
            shares: data.shares,
            date: d.date,
            divPerShare: d.amount,
            divAmt: d.divAmt,
            price: d.clsAmt
        }));

        setRows(prev => [...prev, ...newRows]);
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
            {rows.length > 0 && (
                <table className="tableFormat">
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Shares</th>
                            <th>Date</th>
                            <th>Dividend Per Share</th>
                            <th>Dividend Amount</th>
                            <th>Close Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.ticker}</td>
                                <td>{row.shares}</td>
                                <td>{row.date}</td>
                                <td>${row.divPerShare.toFixed(2)}</td>
                                <td>${row.divAmt.toFixed(2)}</td>
                                <td>${row.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TickerForm;
