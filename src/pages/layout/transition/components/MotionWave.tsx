import { motion } from 'framer-motion';
import Wave from 'react-wavify';

// 기존 wave 라이브러리 컴포넌트에 frame-motion 확장
const MotionWave = motion(Wave);

export default MotionWave;
