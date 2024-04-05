import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Resident } from "@/lib/types";
import {
  IconGenderFemale,
  IconGenderHermaphrodite,
  IconGenderMale,
  IconQuestionMark,
  IconRobot,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

type Props = {
  resident: Resident;
};

function getGenderInfo(gender: string | undefined) {
  if (!gender)
    return {
      name: "unknown",
      icon: <IconQuestionMark />,
    };

  if (["male", "female", "hermaphrodite"].includes(gender)) {
    let icon: ReactNode;

    if (gender === "male") {
      icon = <IconGenderMale />;
    } else if (gender === "female") {
      icon = <IconGenderFemale />;
    } else {
      icon = <IconGenderHermaphrodite />;
    }

    return {
      name: gender,
      icon,
    };
  }

  return {
    name: "droid",
    icon: <IconRobot />,
  };
}

export function ResidentCard(props: Props) {
  const { resident } = props;

  const genderInfo = getGenderInfo(resident.gender);

  return (
    <Card key={resident.id}>
      <CardHeader className="flex flex-row items-center gap-x-4">
        <div>{genderInfo.icon}</div>
        <div className="break-all">
          <CardTitle>{resident.name}</CardTitle>
          <CardDescription className="capitalize">
            {genderInfo.name}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Eye color:</p>
          <p>{resident.eyeColor ?? "-"}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Hair color:</p>
          <p>{resident.hairColor ?? "-"}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Skin color:</p>
          <p>{resident.skinColor ?? "-"}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Height:</p>
          <p>{resident.height ?? "-"}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Mass:</p>
          <p>{resident.mass ?? "-"}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Birth year</p>
          <p>{resident.birthYear ?? "-"}</p>
        </div>
      </CardContent>
    </Card>
  );
}
