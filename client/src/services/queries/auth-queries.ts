import { useQuery } from "@tanstack/react-query";
import { VerifyUserApi } from "../apis/auth-api";

export function VerifyUserQuery() {
  return useQuery({
    queryKey: ["verify-user"],
    queryFn: VerifyUserApi,
  });
}