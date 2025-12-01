import React from 'react'
import CreditCard from "./CreditCard"
import { Highlighter } from './highlighter';


const Payment = () => {
const cards = [
    {
        type: "visa",
        company: "State Bank of India",
        cardNumber: "4532 1234 5678 9012",
        cardHolder: "Amit Sharma",
        cardExpiration: "12/25",
        variant: "default",
    },
    {
        type: "mastercard",
        company: "HDFC Bank",
        cardNumber: "5555 4444 3333 2222",
        cardHolder: "Priya Singh",
        cardExpiration: "08/26",
        variant: "dark",
    },
    {
        type: "amex",
        company: "ICICI Bank",
        cardNumber: "3782 822463 10005",
        cardHolder: "Rahul Verma",
        cardExpiration: "03/27",
        variant: "gold",
    },
    {
        type: "visa",
        company: "Axis Bank",
        cardNumber: "4111 1111 1111 1111",
        cardHolder: "Sneha Patel",
        cardExpiration: "11/24",
        variant: "platinum",
    },
    {
        type: "mastercard",
        company: "Kotak Mahindra Bank",
        cardNumber: "5105 1051 0510 5100",
        cardHolder: "Vikram Rao",
        cardExpiration: "07/25",
        variant: "minimal",
    },
    {
        type: "visa",
        company: "Bank of Baroda",
        cardNumber: "4000 0000 0000 0002",
        cardHolder: "Neha Kulkarni",
        cardExpiration: "09/26",
        variant: "neon",
    },
]

const [activeIndex, setActiveIndex] = React.useState(-1);

React.useEffect(() => {
    if (activeIndex < cards.length - 1) {
        const timer = setTimeout(() => setActiveIndex(activeIndex + 1), 350);
        return () => clearTimeout(timer);
    }
}, [activeIndex, cards.length]);

return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#e63946" }}>
        {/* Left Section */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingRight: 48 }}>
            <h1 style={{ fontWeight: "bold", fontSize: "4rem", marginBottom: 24, color: "#fff", textAlign: "center", width: "100%" }}>
                Payment Methods
            </h1>
            <div style={{ maxWidth: 600, width: "100%" }}>
                <p style={{ margin: 0, lineHeight: 1.5, color: "#fff", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "1.75rem", width: "100%"}}>
                    We have implemented focus on{" "}<Highlighter action="underline" color="#FF9800">QR-based and NCMC cards</Highlighter> to make your payment easier and <Highlighter action="highlight" color="#87CEFA">faster.</Highlighter>
                </p>
            </div>
        </div>
        {/* Right Section */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", position: "relative", minHeight: 500 }}>
            {/* Stacked Cards */}
            <div style={{ position: "relative", width: 340, height: 420 }}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            bottom: index * 32,
                            left: 24 + (index % 2 === 0 ? index * 12 : index * 22),
                            zIndex: index + 1,
                            transition: "transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.5s",
                            transform: activeIndex >= index
                                ? `rotate(${(index % 2 === 0 ? -1 : 1) * (8 + index * 2)}deg) scale(${1 - index * 0.06})`
                                : "translateY(60px) scale(0.8)",
                            opacity: activeIndex >= index ? 1 : 0,
                        }}
                    >
                        <CreditCard
                            type={card.type}
                            company={card.company}
                            cardNumber={card.cardNumber}
                            cardHolder={card.cardHolder}
                            cardExpiration={card.cardExpiration}
                            variant={card.variant}
                            width={320}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}


export default Payment