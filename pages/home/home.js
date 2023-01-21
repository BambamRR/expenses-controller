function logout(){
    showLoading();
    firebase.auth().signOut().then(() => {
        alert("Logout realizado!");
        window.location.href = "../../index.html"
        hideLoading();
    }).catch(error => {
        alert("Logout falhou", error.code);
    })
};

findTransactions();

function findTransactions() {
    setTimeout(() => {
        addTransactionsToScreen(fakeTransactions);
    }, 1000)
};

function addTransactionsToScreen(transactions) {
    const orderedList = document.getElementById('transactions');

    transactions.forEach(transaction => {
       const li = document.createElement('li');
       li.classList.add(transaction.type);

       const date = document.createElement('p');
       date.innerHTML = formateDate(transaction.date);
        li.appendChild(date);

       const money = document.createElement('p');
       money.innerHTML = formatMoney(transaction.money);
       li.appendChild(money);

       const type = document.createElement('p');
       type.innerHTML = transaction.transactionType;
       li.appendChild(type);

       if(transaction.description) {
        const description = document.createElement('p');
        description.innerHTML = transaction.description;
        li.appendChild(description);
       }

       orderedList.appendChild(li);
    });
};

function formateDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
};

function  formatMoney(money) {
    return `${money.currency} ${money.value.toFixed(2)}`
}

const fakeTransactions = [{
        type: 'expense',
        date: '2023-01-20',
        money: {
            currency: 'R$',
            value: 10
        },
        transactionType: 'Supermercado'
    },{
        type: 'income',
        date: '2023-01-19',
        money: {
            currency: 'R$',
            value: 5000
        },
        transactionType: 'Salário',
        description: 'Empresa A'
    },{
        type: 'expense',
        date: '2023-01-20',
        money: {
            currency: 'EUR',
            value: 600
        },
        transactionType: 'Transporte',
        description: 'Metro ida e volta'
    }
];