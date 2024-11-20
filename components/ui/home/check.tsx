'use client'
import { POST } from '@/app/api/webhook/route';
import { NextRequest,NextResponse } from 'next/server'; // Ensure this is imported
import React, { useEffect, useState } from 'react';

function Checkto() {
    // Update state to store parsed response data
    const [responseData, setResponseData] = useState<any>(null);
    const [response, setResponse] = useState<NextResponse<{ status: string; }> | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Create a mock NextRequest object
                const req = new NextRequest('https://example.com/api/payments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // Add any necessary payload here
                    }),
                });

                const result = await POST(req);
                const data = await result.json(); // Parse JSON here
                setResponse(result);
                setResponseData(data); // Store parsed data
            } catch (err) {
                setError(err as Error);
                console.error('Error calling POST:', err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            {responseData && <p>Response: {JSON.stringify(responseData)}</p>}
        </div>
    );
}

export default Checkto;
