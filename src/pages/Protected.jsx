import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api/auth';

export default function Protected() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) return setMessage('No token found');

            try {
                const res = await getProtectedData(token);
                setMessage(res.message);
            } catch (err) {
                console.error(err);
                setMessage('Unauthorized');
            }
        };

        fetchData();
    }, []);

    return <h1>{message}</h1>;
}
