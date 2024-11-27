import React, { useState } from 'react'

type Operator = "+" | "-" | "x" | "÷"

const Main: React.FC = () => {
    const [num1, setNum1] = useState<string>("")
    const [num2, setNum2] = useState<string>("")
    const [operator, setOperator] = useState<Operator>("+")
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let res: number;
        switch (operator){
            case "+":
                res = n1+n2;
                break;
            case "-":
                res = n1-n2;
                break;
            case "x":
                res = n1*n2;
                break;
            case "÷":
                if (n2 === 0){
                    alert("0으로는 못 나눠 멍청아")
                    return;
                }
                res = n1/n2;
                break; 
            default:
                alert("뭐해")
                return;
        }
        setResult(res);
    }

    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React + TypeScript 계산기</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    placeholder="첫 번째 숫자"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px", width: "100px" }}
                />
                <select
                    value={operator}
                    onChange={(e) => setOperator(e.target.value as Operator)}
                    style={{ marginRight: "10px", padding: "5px" }}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="÷">÷</option>
                </select>
                <input
                    type="number"
                    placeholder="두 번째 숫자"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px", width: "100px" }}
                />
                <button onClick={calculate} style={{ padding: "5px 10px" }}>
                    계산
                </button>
            </div>
            {result !== null && (
                <h2>
                    결과: <span>{result}</span>
                </h2>
            )}
        </div>
    )
}

export default Main
