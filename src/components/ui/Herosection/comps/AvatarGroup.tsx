import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/Herosection/comps/avatar";

import Person1 from "@/assets/images/avatar/landing/person1.png";
import Person2 from "@/assets/images/avatar/landing/person2.png";
import Person3 from "@/assets/images/avatar/landing/person3.png";

export function AvatarGroupComp() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={Person1} alt="@person1" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={Person2} alt="@person2" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={Person3} alt="@person3" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
