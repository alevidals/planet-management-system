import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export function HeaderDropdown() {
  return (
    <div className="md:hidden">
      <Dropdown className="border border-default-200 text-foreground">
        <DropdownTrigger>
          <Button variant="bordered" isIconOnly>
            <IconMenu size="16" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Header menu">
          <DropdownItem key="new" as={Link} href="/">
            Home
          </DropdownItem>
          <DropdownItem key="copy" as={Link} href="/planets">
            Planets
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
