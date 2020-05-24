contactManagement = React.createElement(
    "section",
    { id: "contact-list" },
    React.createElement("h1", null, "Contacts"),
    React.createElement(
        "table",
        { className: "contacts-table" },
        React.createElement(
            "tbody",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Email")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Renjith"),
                React.createElement("td", null, "rmshaji@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Dona"),
                React.createElement("td", null, "ddominic@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Sreeraj"),
                React.createElement("td", null, "snamboot@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Shamnad"),
                React.createElement("td", null, "sabdul@suyati.com")
            )
        )
    )
);

ReactDOM.render(contactManagement, document.getElementById("react-container"));