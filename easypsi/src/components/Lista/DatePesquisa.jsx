// DatePesquisa.js
export const atualizarIntervaloData = (filtro) => {
    const hoje = new Date();
    let inicio, fim;
  
    switch (filtro) {
      case "Essa semana":
        const primeiroDiaSemana = new Date(hoje.setDate(hoje.getDate() - hoje.getDay()));
        const ultimoDiaSemana = new Date(hoje.setDate(primeiroDiaSemana.getDate() + 6));
        inicio = primeiroDiaSemana.toISOString().split('T')[0];
        fim = ultimoDiaSemana.toISOString().split('T')[0];
        break;
      case "Esse mês":
        const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
        const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
        inicio = primeiroDiaMes.toISOString().split('T')[0];
        fim = ultimoDiaMes.toISOString().split('T')[0];
        break;
      case "Esse ano":
        const primeiroDiaAno = new Date(hoje.getFullYear(), 0, 1);
        const ultimoDiaAno = new Date(hoje.getFullYear(), 11, 31);
        inicio = primeiroDiaAno.toISOString().split('T')[0];
        fim = ultimoDiaAno.toISOString().split('T')[0];
        break;
      default:
        inicio = '';
        fim = '';
    }
  
    return { inicio, fim };
  };
  