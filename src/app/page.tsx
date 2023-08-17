'use client'

import Button from "@/components/Button";
import Form from "@/components/Form";
import Header from "@/components/Header";
import SnackBar from "@/components/SnackBar";
import Table from "@/components/Table";
import TableSkeleton from "@/components/TableSkeleton";
import { useContext } from "react";
import { StatusContext } from "@/contexts/Status/StatusContext";
import useClients from "@/hooks/useClients";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  const {
    client,
    clients,
    tableIsVisible,
    saveClient,
    newClient,
    editClient,
    deleteClient,
    showTable
  } = useClients()

  const context = useContext(StatusContext)

  if (context === null) return <div className="bg-pink-700"> oi</div>

  const { closeSnackBar, state: { status, snackbarOpen, message } } = context

  return (
    <main className="bg-titanWhite">
      <SideMenu />
    </main>
  )
}
