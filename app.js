new Vue({
    el: '#app',
    data: {
        expression: '',
        result: ''
    },
    methods: {
        appendToExpression(value) {
            this.expression += value;
        },
        calculateResult() {
            try {
                this.result = eval(this.expression);
            } catch (error) {
                this.result = 'Erro';
            }
        },
        clearExpression() {
            this.expression = '';
            this.result = '';
        }
    }
});
