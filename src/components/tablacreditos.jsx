

function tablacreditos(props) {
  const monto = 1000
  const meses = 3
  const fecha = new Date().toLocaleDateString()
  const interes = 10

  return (
    <div className="">
      <div className="text-3xl font-bold p-4 flex justify-center text-slate-700 w-screen">
        Credito {props.credito}
      </div>
      <div className="flex flex-row gap-8 px-16 py-4">
        <div className="w-2/3 ">
          <div className="text-5xl font-bold p-4 flex justify-center text-slate-700">
            Cronograma
          </div>
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Cant de Cuotas
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cuota
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Saldo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Interes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fecha de Pago
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">30/01/2025</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">30/01/2025</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">30/01/2025</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 ">
          <div className="text-5xl font-bold p-4 flex justify-center text-slate-700">
            Detalles de Credito
          </div>
          <div>
            <div className="relative overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Monto
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Meses
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Interes
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha de Prestamo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      S./{monto}.00
                    </th>
                    <td className="px-6 py-4">{meses}</td>
                    <td className="px-6 py-4">{interes}%</td>
                    <td className="px-6 py-4">{fecha}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tablacreditos;
