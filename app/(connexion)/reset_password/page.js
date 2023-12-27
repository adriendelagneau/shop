import RestPassword from "../components/RestPassword"

const ResetPasswordPage = ({searchParams: {token}}) => {
  
    return (
        <div>
            
            <RestPassword token={token} />
    </div>
  )
}

export default ResetPasswordPage