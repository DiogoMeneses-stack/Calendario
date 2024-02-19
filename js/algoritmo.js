$(function ($) {

    const mesNome = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro");
    const hoje = new Date;


    $('.mes').html(mesNome[hoje.getMonth()].concat(' de ', hoje.getFullYear()));
    const diasContainer = $('.dias-container');

    // Loop para gerar dias dinamicamente
    for (let i = 1; i <= 31; i++) {
        diasContainer.append(`<div class="dia" id="${i}">${i}</div>`);
    }
    $('.eventos').html('Algum Evento');

})