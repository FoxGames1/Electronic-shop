import { useState } from "react"
import { ReactComponent as MenuListImage } from "../../../../public/Images/Header/Header__content/LinesMenu.svg"
import { Menu, ConfigProvider } from "antd";
import '../../../css/Header/Header__content/FlexBox.css'

const items = [
    {
        label: "Каталог товаров",
        key: "SubMenu",
        icon: <MenuListImage />,
        children: [
            {
                key: 1,
                label: "item 1"
            },
            {
                key: 2,
                label: "item 2"
            },
            {
                key: 3,
                label: "item 3"
            },
            {
                key: 4,
                label: "item 4"
            },
            {
                key: 5,
                label: "item 5"
            },
            {
                key: 6,
                label: "item 6"
            },
            {
                key: 7,
                label: "item 7"
            },
            {
                key: 8,
                label: "item 8"
            },
            {
                key: 9,
                label: "item 9"
            },
            {
                key: 10,
                label: "item 10"
            }

        ]
    }
]

const MenuList = () => {

    const [current, setCurrent] = useState("onClick")

    const OnClick = e => {
        console.log("click ", e)
        setCurrent(e.key)
    }

    const menuStyles = {
        cursor: 'pointer',
        width: 200,
        borderBottom: 0,
        fontWeight: 500,
        fontSize: 18,
        zIndex: 0,

    }


    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            horizontalItemSelectedColor: "transparent",
                            itemActiveBg: "var(--light-green)",
                            colorText: 'var(--dark-green)',
                            itemBg: "transparent"
                        },
                    },
                }}
            >
                <Menu
                    className="Menu"
                    triggerSubMenuAction="click"
                    OnClick={OnClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={menuStyles}
                />
            </ConfigProvider >
        </>

    )
}

export default MenuList
