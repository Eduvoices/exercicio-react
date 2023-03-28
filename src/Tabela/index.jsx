import "./Tabela.modules.css"

function Tabela({resultado}) {
    const printResultado = () => {

        if (resultado < 18.5) {
            return (
                <>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do peso ideal (Magreza)</td>
                </>
            )
        } else if (resultado <= 24.9) {
            return (
                <>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Peso normal</td>
                </>
            )
        } else if (resultado <= 29.9) {
            return (
                <>
                    <td>Entre 25 e 29,9</td>
                    <td>Sobrepeso</td>
                </>
            )
        } else if (resultado <= 34.9) {
            return (
                <>
                    <td>Entre 30 e 34,9</td>
                    <td>Obesidade (Grau I)</td>
                </>
            )
        } else if (resultado <= 39.9) {
            return (
                <>
                    <td>Entre 35 e 39,9</td>
                    <td>Obesidade (Grau II)</td>
                </>
            )
        } else if (resultado > 40) {
            return (
                <>
                    <td>Maior que 40</td>
                    <td>Obesidade (Grau III)</td>
                </>
            )
        }
    }

    return (
        <table>
            <thead>
                <th>IMC</th>
                <th>Classificação</th>
            </thead>
            <tr>
                {printResultado()}
            </tr>
        </table>
    )
}

export default Tabela