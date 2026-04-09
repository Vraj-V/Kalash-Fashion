import React from 'react'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../user/UserSlice'

export const AdminProfile = () => {
  const userInfo = useSelector(selectUserInfo)

  return (
    <Stack height="calc(100vh - 4rem)" alignItems="center" justifyContent="center" px={2}>
      <Paper elevation={1} sx={{ width: '100%', maxWidth: 600, p: 3 }}>
        <Stack alignItems="center" rowGap={1}>
          <Avatar sx={{ width: 80, height: 80 }} />
          <Typography variant="h5" fontWeight={600}>{userInfo?.name || 'Admin'}</Typography>
          <Typography color="text.secondary">{userInfo?.email}</Typography>
          <Typography color="text.secondary">Role: Admin</Typography>
        </Stack>
      </Paper>
    </Stack>
  )
}
