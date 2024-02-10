/**
 * 用户类别
 */
export type User = {
  id: number
  userAccount: string
  userName: string
  userAvatar?: string
  userProfile?: string
  gender?: number
  phone?: string
  email?: string
  tags?: string
  createTime: Date
}
