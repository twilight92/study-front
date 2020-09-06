import React from "react";
import data from "../../../data.js"
import RocketFreshIcon from "../RocketIcon/RocketFreshIcon";
import RocketWowIcon from "../RocketIcon/RocketWowIcon";
import CartProductSelectBox from "../CartProductSelectBox/CartProductSelectBox";
import "./CartProductTableRow.css"

const rocketType = {
  ROCKET_FRESH: "ROCKET_FRESH",
  ROCKET_WOW: "ROCKET_WOW",
  PARTNER: "PARTNER"
}

const products = data.products;
const freshProducts = products.filter(item => item.type === rocketType.ROCKET_FRESH);
const wowProducts = products.filter(item => item.type === rocketType.ROCKET_WOW);
const partnerProducts = products.filter(item => item.type === rocketType.PARTNER);

function type({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return <RocketFreshIcon />;
    case rocketType.ROCKET_WOW : return <RocketWowIcon />;
    default: return ""
  }
}

function division({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return "로켓프레시 상품";
    case rocketType.ROCKET_WOW: return "로켓배송 상품(로켓와우 포함)";
    case rocketType.PARTNER: return "판매자배송 상품";
    default: return ""
  }
}

function checkInventory({inventory}) {
  if (inventory === 0) return <p className="caution">품절</p>
  if (inventory < 5) return <p className="caution">품절임박 {inventory}개 잔여</p>
}

const tabelComponent = data => {
  return <>
          <tr className="title"><td colSpan="7">{division(data[0])}</td></tr>
          {data.map(product => {
            return (
              <tr key={product.id}>
                <td>
                    <input type={"checkbox"} disabled={product.inventory === 0}/>
                </td>
                <td>
                    <img src={product.img} alt={product.name} />
                </td>
                <td>
                    {product.name}
                    {checkInventory(product)}
                </td>
                <td>
                    {product.price}
                </td>
                <td>
                    {CartProductSelectBox(product)}
                </td>
                <td>
                    {product.price * product.count}
                </td>
                <td>
                    {type(product)}
                </td>
              </tr>
            )
          })}
        </>
}

export default function Table() {
  return (
    <table>
      <tbody>
        { tabelComponent(freshProducts) }
        { tabelComponent(wowProducts) }
        { tabelComponent(partnerProducts) }
      </tbody>
    </table>
  )
}
