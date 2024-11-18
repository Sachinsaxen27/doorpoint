import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function FashionPreview() {
    const data = useSelector(state => state.items)
    const [types, setMyTypes] = useState('')
    const [Ctype, setMycType] = useState('')
    const [Ntype, setMyNtype] = useState('')
    const [Btype, setMyBtype] = useState('')
    const [Stype, setMyStype] = useState('')
    const [Ftype, setMyFtype] = useState('')
    const [Bottype, setMyBottype] = useState('')
    useEffect(() => {
        if (data.itemtype === 'Clothes') {
            if (data.clotheCategory === "Winter") {
                setMyTypes("Suitable For")
                setMycType('Fabric')
                setMyNtype('Neck')
                setMyBtype("Type")
                setMyStype("Sleeves")
            }
            else if (data.clotheCategory === "Saree") {
                setMyTypes("Suitable For")
                setMycType('Fabric')
                setMyNtype('Neck')
                setMyBtype("In the Box")
                setMyStype("Sleeves")
                setMyFtype('Blouse Fabric')
                setMyBottype("Blouse Color")
            }
            else if (data.clotheCategory === "Top and Tees") {
                setMyTypes("Suitable For")
                setMyNtype("Collar")
                setMycType('Fabric')
                setMyBtype("Other Details")
                setMyStype("Sleeves")
                setMyFtype("Fit")
            }
            else if (data.clotheCategory === 'Jeans') {
                setMycType('Fabric')
                setMyTypes("Suitable For")
                setMycType("Material")
                setMyBtype("Other Details")
                setMyNtype("Stretchable")
                setMyStype('Faded')
                setMyFtype("Rise")
            }
            else if (data.clotheCategory === 'Fit and Flare') {
                setMyFtype("Type")
                setMyNtype('Neck')
                setMyStype("Sleeves")
                setMyTypes("Occasion")
                setMycType("Material")
                setMyBtype("Type")
                if (data.fit === 'A-Line') {
                    setMyBottype('Length')
                }
                else {
                    setMyBottype('Bottom Type')
                }
            }
            else {
                setMyNtype('Neck')
                setMyStype("Sleeves")
                setMyTypes("Occasion")
                setMycType("Material")
                setMyBtype("Type")
                setMyBottype('Bottom Type')
            }
        }
        else if (data.itemtype === 'Grooming') {

        }
    }, [])
    return (
        <>
            {data.itemtype === 'Clothes' && <ul className="list-group">
                {(data.fieldsection !== null && data.fieldsection !== undefined && data.fieldsection.length > 0) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Type
                        </div>
                        <div className="col-sm-9">
                            {data.fieldsection}
                        </div>
                    </div>
                </li>}
                {(data.fit !== null && data.fit !== undefined && data.fit.length > 0) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            {Ftype}
                        </div>
                        <div className="col-sm-9">
                            {data.fit}
                        </div>
                    </div>
                </li>}
                {(data.sleeve !== null && data.sleeve !== undefined) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            {Stype}
                        </div>
                        <div className="col-sm-9">
                            {data.sleeve}
                        </div>
                    </div>
                </li>}
                {data.clotheCategory === 'Kurta' && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            Top Type
                        </div>
                        <div className="col-sm-9">
                            {data.clotheCategory}
                        </div>
                    </div>
                </li>}
                {(data.bottomtype !== undefined && data.bottomtype.length > 0) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            {Bottype}
                        </div>
                        <div className="col-sm-9">
                            {data.bottomtype}
                        </div>
                    </div>
                </li>}
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            Pattern
                        </div>
                        <div className="col-sm-9">
                            {data.pattern}
                        </div>
                    </div>
                </li>
                {data.neck !== undefined && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            {Ntype}
                        </div>
                        <div className="col-sm-9">
                            {data.neck}
                        </div>
                    </div>
                </li>}
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            {Ctype}
                        </div>
                        <div className="col-sm-9">
                            {data.material}
                        </div>
                    </div>
                </li>
                {data.clotheCategory === "Jeans" && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            Ideal For
                        </div>
                        <div className="col-sm-9 ">
                            {data.forwho}
                        </div>
                    </div>
                </li>}
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            {types}
                        </div>
                        <div className="col-sm-9 ">
                            {data.clothestype}
                        </div>
                    </div>
                </li>
                {(data.sarilength !== null && data.sarilength !== undefined) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            Saree length
                        </div>
                        <div className="col-sm-9 ">
                            {data.sarilength}Mtr
                        </div>
                    </div>
                </li>}
                {data.weight > 0 && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3 ">
                            Weight
                        </div>
                        <div className="col-sm-9">
                            {(data.weight).toFixed(3)}{data.weight > 1 ? "kg" : 'g'}
                        </div>
                    </div>
                </li>}
                {(data.inthebox !== null && data.inthebox !== undefined && data.inthebox.length > 3) && <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            {Btype}
                        </div>
                        <div className="col-sm-9">
                            {data.inthebox}
                        </div>
                    </div>
                </li>}
            </ul>}
            {data.itemtype==="Grooming"&&<ul>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Quantity
                        </div>
                        <div className="col-sm-9">
                            {data.quantity}
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Ideal For
                        </div>
                        <div className="col-sm-9">
                            {data.idealfor}
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Fash Wash Type 
                        </div>
                        <div className="col-sm-9">
                            {data.ptype}
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Applied For
                        </div>
                        <div className="col-sm-9">
                            {data.appiledfor}
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Skin Type
                        </div>
                        <div className="col-sm-9">
                            {data.skintype}
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            Life Shell
                        </div>
                        <div className="col-sm-9">
                            {data.lifeshell}
                        </div>
                    </div>
                </li>
            </ul>}
        </>
    )
}

export default FashionPreview