import React from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { AdminOrderDetail } from '../features/admin/components/AdminOrderDetail'

export const AdminOrderDetailPage = () => {
    return (
        <>
            <Navbar />
            <AdminOrderDetail />
        </>
    )
}
