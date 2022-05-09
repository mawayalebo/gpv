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
                                <div className="bg-[#6a63312a] p-4 shadow-md">
                                    <h2 className="font-bold uppercase">{combo.Name}</h2>
                                    <div>
                                        <ul>
                                            {
                                                combo.items.map((item, index) => {
                                                    return (
                                                        <li key={index} className="p-2 bg-[#ffffff8a] my-2 rounded-full hover:ml-3 hover:shadow-md hover:font-semibold hover:transtion delay-3 duration-300 cursor-default">{item}</li>
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