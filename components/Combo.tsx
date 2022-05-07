function Combo() {
     
      const Combos =   [
        {
              Name: 'Combo 1',
              items: ['Company Registration', 'Tax Clearance', 'BBBEE', 'CSD Registration', 'Share certificate', 'Bank Account']
        },
        {
          Name: 'Combo 2',
          items: ['Company Registration', 'Tax Clearance', 'BBBEE', 'CSD Registration', 'Share certificate', 'Bank Account', 'Visual Landline', 'Basic website & Hosting']
      }
    ]
    return ( 
        <section>
            <div  className="flex gap-4 items-center justify-center" >
                {
                    Combos.map((combo, index) => {
                        return (
                            <div key={index}>
                                <div className="bg-blue-300 p-4">
                                    <h2>{combo.Name}</h2>
                                    <div>
                                        <ul>
                                            {
                                                combo.items.map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}

export default Combo;