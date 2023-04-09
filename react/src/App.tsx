import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import Counter from '../../contract/artifacts/contracts/Counter.sol/Counter.json';
import './App.css';
import { getEth, hasAccounts, requestAccounts } from './utils';

function App() {
    const [count, setCounter] = useState('');
    const contractRef = useRef<any>(null);

    useEffect(() => {
        const initCounter = async () => {
            if (!(await hasAccounts()) && !(await requestAccounts())) {
                console.log('You are in trouble, no one wants to play');
                return null;
            }

            contractRef.current = new ethers.Contract(
                import.meta.env.VITE_CONTRACT_ADDRESS,
                Counter.abi,
                new ethers.providers.Web3Provider(getEth()).getSigner()
            );

            const count = await contractRef.current.getCounter();
            setCounter(count);

            contractRef.current.on(
                contractRef.current.filters.CounterInc(),
                function (count) {
                    setCounter(count.toNumber());
                }
            );
        };
        initCounter();
    }, []);

    return (
        <div className="App">
            Count: {count}
            <button
                onClick={() => {
                    contractRef.current && contractRef.current.count();
                }}>
                increment
            </button>
        </div>
    );
}

export default App;
