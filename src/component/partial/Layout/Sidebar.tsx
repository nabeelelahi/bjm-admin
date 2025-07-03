import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { renderMenu } from "./sidebarLink";
import { useColors } from "../../../config/color";
import { Button, Popover } from "antd";

function Sidebar({ collapsed, setCollapsed }: any) {
  const colors = useColors();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    location.href = '/'
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      // className="bg-gray-900"
      width={235}
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.TextColor,
        boxShadow: colors.boxshadow,
      }}
    >
      <div
        className="text-center py-4 text-xl roboto-bold"
        style={{ color: colors.TextColor }}
      >
        {collapsed ? "BJM" : "BJM ADMIN"}
      </div>
      {renderMenu()}
      <Popover
        content={<Button onClick={logout}>Logout</Button>}
        title="Are you sure you want to logout?"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        placement={'bottom'}
      >
        <div>
          <p className="ms-7 cursor-pointer mt-2">Logout</p>
        </div>
      </Popover>
    </Sider>
  );
}

export default React.memo(Sidebar);
