export class GlobalVariables{

	public static get BACKEND_DOMAIN() : string
	{
		return ''
	};

	public static get BACKEND_API_URL() : string
	{
		return this.BACKEND_DOMAIN + '/api'
	};

	public static get LOGGED_USER_ID() : any
	{
		return localStorage.getItem('user_id')
	}

	public static get LOGGED_USER_NAME() : any
	{
		return localStorage.getItem('user_name')
	}

}