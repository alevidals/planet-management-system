import { AddPlanetForm } from "@/components/add-planet-form";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export function HeaderDropdown() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="md:hidden">
      <Dropdown className="border border-default-200 text-foreground">
        <DropdownTrigger>
          <Button variant="bordered" isIconOnly>
            <IconMenu size="16" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Header menu">
          <DropdownItem as={Link} href="/">
            Home
          </DropdownItem>
          <DropdownItem as={Link} href="/planets">
            Planets
          </DropdownItem>
          <DropdownItem
            as={Button}
            onPress={onOpen}
            className="bg-primary-400 text-background font-semibold"
          >
            Add planet
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <AddPlanetForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
