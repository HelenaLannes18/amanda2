import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react';

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

export default function AppIndex() {
  const router = useRouter();
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   fetch("/api/clerk", {
  //     method: "GET",
  //     credentials: "include",
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         router.push('/sign-in');
  //         throw new Error("Not authenticated");
  //       }
  //     })
  //     .then((data) => {
  //       setUserId(data.userId);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {

    router.push(`/empresa`);

  }, []);

  return (
    <div style={spinnerStyle}>
      <Spinner size='xl' />
    </div>
  );
}