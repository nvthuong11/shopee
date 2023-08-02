import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import useQueryConfig from './useQueryConfig'
import { schema, Schema } from 'src/utils/rules'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

type FormData = Pick<Schema, 'name'>

const nameSchema = schema.pick(['name'])

export default function useSearchProducts() {
  const queryConfig = useQueryConfig()

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })
  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit((data) => {
    // Nếu người dùng đang ở order(Giá thấp tới cao or ngược lại) mà nhập search, thì phải quay lại sort_by(Mới nhất)
    // Nếu người dùng đang ở sort_by mà nhập search thì giữ nguyên trạng thái sort_by
    // => trong queryConfig có order thì sẽ omit order
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}
