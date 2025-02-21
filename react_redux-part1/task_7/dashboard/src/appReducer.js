export const APP_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
  SET_COURSES: 'SET_COURSES',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS'
};

export const initialState = {
  displayDrawer: true,
  user: { isLoggedIn: false, email: '', password: '' },
  notifications: [],
  courses: [],
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.LOGIN:
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
          isLoggedIn: true,
        },
      };

    case APP_ACTIONS.LOGOUT:
      return {
        ...state,
        user: { isLoggedIn: false, email: '', password: '' },
        courses: [],
      };

    case APP_ACTIONS.TOGGLE_DRAWER:
      return {
        ...state,
        displayDrawer: !state.displayDrawer,
      };

    case APP_ACTIONS.MARK_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };

    case APP_ACTIONS.SET_COURSES:
      console.log('Setting courses:', action.payload);
      return {
        ...state,
        courses: action.payload,
      };
      case APP_ACTIONS.SET_NOTIFICATIONS: 
      return {
        ...state,
        notifications: action.payload,
      };

    default:
      return state;
  }
}
