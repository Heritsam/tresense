"use client";

import { useCurrentUserImage } from "@/hooks/use-current-user-image";
import { useCurrentUserName } from "@/hooks/use-current-user-name";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

export function CurrentUserAvatar() {
  const profileImage = useCurrentUserImage();
  const { name, status } = useCurrentUserName();
  const initials = name
    ?.split(" ")
    ?.map((word) => word[0])
    ?.filter(
      (initial, index, initials) => index === 0 || index === initials.length - 1
    )
    ?.join("")
    ?.toUpperCase();

  if (status === "pending") {
    return <Skeleton className="size-6 rounded-full" />;
  }

  if (status === "error") {
    return (
      <Avatar className="size-6">
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar className="size-6">
      <AvatarImage src={profileImage ?? ""} alt={initials} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
