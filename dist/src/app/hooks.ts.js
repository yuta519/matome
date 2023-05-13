import { useDispatch, useSelector } from '../../vendor/deps/react-redux.js';

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { useAppDispatch, useAppSelector };
