
            const botaoConverter = document.querySelector('#botaoprincipal')
            const select1 = document.querySelector('#select1')
            const select2 = document.querySelector('#select2')
                
        botaoConverter.addEventListener('click', converterValores)
    

        function converterValores() {
            const valorParaConverter = document.querySelector('#ValorAserConvertido').value
            const dolarHoje = 5.50
            const euroHoje = 6.00
            const bitcoinHoje = 200.000
            const realConvertidoNoPainel = document.querySelector('#valor1')
            const moedasConvertidasNoPainel = document.querySelector('#valor2')
        
    

        if (select1.value == 'realS1' && select2.value == 'dolarS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(valorParaConverter / dolarHoje)}
        
        if (select1.value == 'realS1' && select2.value == 'euroS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency', currency: 'EUR' }).format(valorParaConverter / euroHoje)}

        if (select1.value == 'realS1' && select2.value == 'bitcoinS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8 }).format(valorParaConverter / bitcoinHoje)}
        
        if (select1.value == 'dolarS1' && select2.value == 'euroS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency', currency: 'EUR' }).format(valorParaConverter / euroHoje)}
        
        if (select1.value == 'dolarS1' && select2.value == 'bitcoinS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8 }).format(valorParaConverter / bitcoinHoje)}
        
        if (select1.value == 'euroS1' && select2.value == 'dolarS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency', currency: 'EUR' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(valorParaConverter / dolarHoje)}
        
        if (select1.value == 'euroS1' && select2.value == 'bitcoinS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency', currency: 'EUR' }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8 }).format(valorParaConverter / bitcoinHoje)}
        
        if (select1.value == 'bitcoinS1' && select2.value == 'dolarS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8 }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(valorParaConverter / dolarHoje)}
        
        if (select1.value == 'bitcoinS1' && select2.value == 'euroS2') {
        realConvertidoNoPainel.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8 }).format(valorParaConverter)
        moedasConvertidasNoPainel.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency', currency: 'EUR' }).format(valorParaConverter / euroHoje)}
            
           
        console.log(valorParaConverter)
        }
       


        select1.addEventListener('change', trocarBandeiras1)
        select2.addEventListener('change', trocarBandeiras2)
       
        
        function trocarBandeiras1(){ 
        
        const nomeDaMoeda1 = document.querySelector('#moeda1')
        const valor1 = document.querySelector('#valor1')
        const bandeia1 = document.querySelector('#bandeira1')
          
                if (select1.value == 'realS1') {
                    nomeDaMoeda1.innerHTML = 'R$ Real'
                    bandeia1.src = './Brasil.png'} 
                if (select1.value == 'dolarS1') {
                    nomeDaMoeda1.innerHTML = 'US$ Dólar'
                    bandeia1.src = './eua.png'}
                if (select1.value == 'euroS1') {
                    nomeDaMoeda1.innerHTML = '€ Euro'
                    bandeia1.src = './euro.png'}
                if (select1.value == 'bitcoinS1') {
                    nomeDaMoeda1.innerHTML = '₿ Bitcoin'
                    bandeia1.src = './btc.png'}
                }
          
        function trocarBandeiras2(){

        const nomeDaMoeda2 = document.querySelector('#moeda2')
        const valor2 = document.querySelector('#valor2')
        const bandeira2 = document.querySelector('#bandeira2')
                       
                if (select2.value == 'dolarS2') {
                    nomeDaMoeda2.innerHTML = 'US$ Dólar'
                    bandeira2.src = './eua.png'}
                if (select2.value == 'euroS2') {
                    nomeDaMoeda2.innerHTML = '€ Euro'
                    bandeira2.src = './euro.png'}
                if (select2.value == 'bitcoinS2') {
                    nomeDaMoeda2.innerHTML = '₿ Bitcoin'
                    bandeira2.src = './btc.png'}}
 