
class Printer {
    statement(transactions) {
        // return "date || credit || debit || balance\n31/10/2018 || || || 0"

        let array = transactions.map((transaction) => {
            let arrayStrs = [
                transaction.date, 
                transaction.credit || '', 
                transaction.debit || '',
                transaction.balance 
            ];

            return arrayStrs.join(" || ");

        });

        array.unshift("date || credit || debit || balance");
        return array.join("\n");
    }


}

export default Printer;