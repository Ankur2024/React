import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [result, setResult] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = currencyInfo ? Object.keys(currencyInfo) : []; 

    const swap = () => {
        setFrom(to);
        setTo(from);
        setResult(amount);
        setAmount(result);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setResult(amount * currencyInfo[to]);
            console.log(amount * currencyInfo[to])
        } else {
            console.error("Currency conversion rate not found.");
        }
    };

    return (
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: `url("https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                convert();
            }}>
                <div className='w-full mb-1'>
                    <InputBox 
                        label="From"
                        amount={amount}
                        onAmountChange={(amount) => setAmount(amount)}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                    />
                </div>
                <div>
                    <div className='relative w-full h-0.5'>
                        <button 
                            type='button'
                            className='absolute left-1/2
                                -translate-x-1/2
                                -translate-y-1/2 border-2
                                border-white rounded-md
                                bg-blue-600 text-white px-2 py-0.5'
                            onClick={swap}>
                            Swap
                        </button>
                    </div>
                    <div className='w-full mt-1 mb-4'>
                        <InputBox
                            label="To"
                            amount={result}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                        onClick={convert}
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
