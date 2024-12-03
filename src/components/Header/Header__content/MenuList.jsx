import { useState } from "react"
import { ReactComponent as MenuListImage } from "../../../../public/Images/Header/Header__content/LinesMenu.svg"
import { Menu, ConfigProvider } from "antd"

const items = [
    {
        label: "Каталог товаров",
        key: "SubMenu",
        icon: <MenuListImage />,
        children: [
            {
                key: 1,
                label: "item 1"
            }
        ]
    }
]

const MenuList = () => {
    const [current, setCurrent] = useState("mail")

    const OnClick = e => {
        console.log("click ", e)
        setCurrent(e.key)
    }

    return (

        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        activeBarBorderWidth: 1,
                    },
                },
            }}
        >

            <Menu
                triggerSubMenuAction="click"
                OnClick={OnClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{}}
            />
        </ConfigProvider>

    )
}

export default MenuList
