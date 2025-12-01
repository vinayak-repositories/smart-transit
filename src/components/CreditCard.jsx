import "./CreditCard.css"

const CreditCard = ({
  type = "visa",
  company = "Bank of India",
  cardNumber = "4532 1234 5678 9012",
  cardHolder = "John Doe",
  cardExpiration = "12/25",
  width = 320,
  variant = "default",
}) => {
  const formatCardNumber = (number) => {
    return number
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
  }

  const getCardTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case "visa":
        return (
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="white" />
            <path
              d="M16.1 7.2h-2.8l-1.7 9.6h2.8l1.7-9.6zm7.6 6.2c0-2.5-3.4-2.6-3.4-3.7 0-.3.3-.7 1-.7.6 0 1.1.1 1.6.3l.3-1.9c-.4-.1-1-.3-1.8-.3-1.9 0-3.2 1-3.2 2.4 0 1 .9 1.6 1.6 1.9.7.3 1 .6 1 .9 0 .5-.6.7-1.1.7-.9 0-1.5-.2-2.3-.6l-.4 2c.5.2 1.5.4 2.5.4 2 0 3.3-1 3.3-2.5zm5.2 3.4h2.4l-2.1-9.6h-2.2c-.5 0-.9.3-1.1.7l-3.9 8.9h2.8l.6-1.5h3.4l.3 1.5zm-3-3.5l1.4-3.8.8 3.8h-2.2zm-9.8-6.1l-2.6 9.6h-2.8l-1.3-6.8c-.1-.4-.2-.5-.5-.7-.5-.3-1.4-.6-2.1-.8l.1-.3h3.6c.5 0 .9.3 1 .8l.9 4.8 2.2-5.6h2.8z"
              fill="#1434CB"
            />
          </svg>
        )
      case "mastercard":
        return (
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="white" />
            <circle cx="15" cy="12" r="7" fill="#EB001B" />
            <circle cx="25" cy="12" r="7" fill="#F79E1B" />
            <path
              d="M20 6.5c1.5 1.3 2.5 3.2 2.5 5.5s-1 4.2-2.5 5.5c-1.5-1.3-2.5-3.2-2.5-5.5s1-4.2 2.5-5.5z"
              fill="#FF5F00"
            />
          </svg>
        )
      case "amex":
        return (
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="#006FCF" />
            <path
              d="M8.5 8.5h3l.5 1.5.5-1.5h3v7h-2v-4l-.8 2h-1.4l-.8-2v4h-2v-7zm8 0h5v1.5h-3v1h2.8v1.5h-2.8v1.5h3v1.5h-5v-7zm6.5 0h2.5l1.5 2.5 1.5-2.5h2.5l-2.5 3.5 2.5 3.5h-2.5l-1.5-2.5-1.5 2.5h-2.5l2.5-3.5-2.5-3.5z"
              fill="white"
            />
          </svg>
        )
      default:
        return <div className="card-type-placeholder">{type.toUpperCase()}</div>
    }
  }

  const cardStyle = {
    width: `${width}px`,
    height: `${width * 0.63}px`, // Maintain credit card aspect ratio
  }

  return (
    <div className={`credit-card ${variant}`} style={cardStyle}>
      <div className="card-background">
        <div className="card-shine"></div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <div className="card-company">{company}</div>
          <div className="card-type">{getCardTypeIcon(type)}</div>
        </div>

        <div className="card-chip">
          <div className="chip-lines">
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
          </div>
        </div>

        <div className="card-number">{formatCardNumber(cardNumber)}</div>

        <div className="card-footer">
          <div className="card-holder">
            <div className="card-label">Card Holder</div>
            <div className="card-value">{cardHolder}</div>
          </div>
          <div className="card-expiry">
            <div className="card-label">Expires</div>
            <div className="card-value">{cardExpiration}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
