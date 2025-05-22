import React, { use } from "react";
import { AuthContext } from "../auth/AuthProvider";

const DeletedConfirmation = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Deleted Confirmation</h1>
        <h1 className="text-2xl font-bold">{user?.displayName}</h1>
        <p className="text-lg">Your plant has been deleted successfully</p>
      </div>
    </div>
  );
};

export default DeletedConfirmation;
