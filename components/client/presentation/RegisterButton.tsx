'use client';
import { motion } from 'framer-motion';
interface config {
    isClick: boolean
}
const RegisterButton = ({ isClick }: config) => {
    return (
        <svg className={`hover:cursor-pointer w-full group h-auto aspect-auto  rounded-sm ${(isClick) ? " bg-progressbar transition-colors duration-[0.75s] delay-[1.2s] ease-in-out" : ""}`} viewBox="0 0 169 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg className={`
                w-full group h-auto aspect-auto
                group
                group-hover:opacity-5
                group-hover:transition-all duration-[1s] delay-[0.3s] ease-in-out

                `}>
                <motion.rect
                    className={`
                    group-hover:translate-x-[13%]
                    group-hover:translate-y-[12%]
                    ${(isClick)
                            ? " translate-x-[13%] translate-y-[12%] opacity-0 transition-all duration-[1s] delay-[0.5s] ease-in-out"
                            : "opacity-100 transition-transform duration-700 ease-in-out"}
                    `}

                    x="0.5" y="0.5" width="125" height="32" rx="1.5" fill="#d9d9d9" stroke="#7C3023"

                />
                <motion.rect
                    className={`transition-transform duration-700 ease-in-out
                    group-hover:-translate-x-[13%]
                    group-hover:-translate-y-[12%]
                    ${(isClick)
                            ? " translate-x-[13%] translate-y-[12%] opacity-0 transition-all duration-[1s] delay-[0.5s] ease-in-out"
                            : "opacity-100 transition-transform duration-700 ease-in-out"}
                    `}
                    x="43.5" y="14.5" width="125" height="34" rx="1.5" fill="#d9d9d9" stroke="#7C3023"

                />
            </svg>

            <motion.path
                className={`${(isClick) ? "fill-progressbar" : "fill-textbase"} group-hover:fill-progressbar hover:cursor-pointer
                transition-all duration-500 delay-150 ease-in
                
                `}
                d="M20.1436 30.4932H16.6865V40H9.40625V16.6357H18.9131C20.3291 16.6357 21.5205 16.7285 22.4873 16.9141C23.4639 17.0898 24.2646 17.3389 24.8896 17.6611C25.5244 17.9736 26.0127 18.3496 26.3545 18.7891C26.6963 19.2285 26.9453 19.7119 27.1016 20.2393C27.2578 20.7666 27.3506 21.3281 27.3799 21.9238C27.4092 22.5195 27.4238 23.125 27.4238 23.7402C27.4238 24.3164 27.3848 24.8779 27.3066 25.4248C27.2383 25.9619 27.0918 26.4502 26.8672 26.8896C26.6426 27.3291 26.3203 27.7051 25.9004 28.0176C25.4902 28.3301 24.9482 28.5449 24.2744 28.6621C24.5869 28.6914 24.9238 28.7793 25.2852 28.9258C25.6562 29.0625 25.998 29.292 26.3105 29.6143C26.6328 29.9268 26.8965 30.3467 27.1016 30.874C27.3164 31.4014 27.4238 32.0654 27.4238 32.8662V40H20.1436V30.4932ZM16.6865 27.0947H20.1436V20.1074H16.6865V27.0947ZM51.0664 33.3936C51.0664 34.0869 51.042 34.7461 50.9932 35.3711C50.9443 35.9863 50.8223 36.5625 50.627 37.0996C50.4414 37.627 50.1533 38.1006 49.7627 38.5205C49.3818 38.9404 48.8545 39.3018 48.1807 39.6045C47.5166 39.8975 46.6816 40.1221 45.6758 40.2783C44.6797 40.4443 43.4639 40.5273 42.0283 40.5273C40.5635 40.5273 39.3232 40.4395 38.3076 40.2637C37.3018 40.0879 36.4668 39.8535 35.8027 39.5605C35.1387 39.2676 34.6211 38.9307 34.25 38.5498C33.8789 38.1592 33.6055 37.7539 33.4297 37.334C33.2539 36.9043 33.1465 36.4746 33.1074 36.0449C33.0781 35.6152 33.0635 35.2051 33.0635 34.8145V26.0254C33.0635 25.6348 33.0781 25.2246 33.1074 24.7949C33.1465 24.3652 33.2539 23.9404 33.4297 23.5205C33.6055 23.1006 33.8789 22.7002 34.25 22.3193C34.6211 21.9287 35.1387 21.5869 35.8027 21.2939C36.4668 21.001 37.3018 20.7666 38.3076 20.5908C39.3232 20.415 40.5635 20.3271 42.0283 20.3271C43.4541 20.3271 44.6699 20.415 45.6758 20.5908C46.6816 20.7666 47.5166 21.001 48.1807 21.2939C48.8545 21.5869 49.3818 21.9287 49.7627 22.3193C50.1533 22.7002 50.4463 23.1006 50.6416 23.5205C50.8369 23.9404 50.959 24.3701 51.0078 24.8096C51.0566 25.2393 51.0811 25.6445 51.0811 26.0254V31.5186H40.3438V36.5283H43.8008V33.4082L51.0664 33.3936ZM40.3438 28.9111H43.8008V24.4727H40.3438V28.9111ZM65.5391 38.5205C65.2363 38.8623 64.8848 39.165 64.4844 39.4287C64.0938 39.6924 63.6689 39.9121 63.21 40.0879C62.7607 40.2734 62.2871 40.4102 61.7891 40.498C61.291 40.5957 60.793 40.6445 60.2949 40.6445C59.6016 40.6445 58.9229 40.5322 58.2588 40.3076C57.6045 40.083 57.0186 39.7363 56.501 39.2676C55.9932 38.7988 55.583 38.208 55.2705 37.4951C54.958 36.7725 54.8018 35.9229 54.8018 34.9463V26.4795C54.8018 25.4541 54.958 24.5605 55.2705 23.7988C55.5928 23.0371 56.0127 22.4072 56.5303 21.9092C57.0576 21.4014 57.6582 21.0254 58.332 20.7812C59.0059 20.5371 59.6943 20.415 60.3975 20.415C60.9639 20.415 61.5254 20.4785 62.082 20.6055C62.6387 20.7324 63.166 20.9229 63.6641 21.1768C64.1719 21.4209 64.6357 21.7334 65.0557 22.1143C65.4756 22.4854 65.832 22.915 66.125 23.4033L66.7988 20.957H72.8193V39.1504C72.8193 40.293 72.6973 41.3184 72.4531 42.2266C72.209 43.1445 71.877 43.9551 71.457 44.6582C71.0371 45.3613 70.5391 45.9619 69.9629 46.46C69.3965 46.958 68.7812 47.3633 68.1172 47.6758C67.4531 47.998 66.7549 48.2324 66.0225 48.3789C65.29 48.5254 64.5576 48.5986 63.8252 48.5986C63.1611 48.5986 62.5068 48.54 61.8623 48.4229C61.2275 48.3057 60.6172 48.1348 60.0312 47.9102C59.4551 47.6953 58.9229 47.4316 58.4346 47.1191C57.9463 46.8066 57.5215 46.4551 57.1602 46.0645C56.7988 45.6836 56.5156 45.2686 56.3105 44.8193C56.1152 44.3701 56.0176 43.8965 56.0176 43.3984C56.0176 43.1836 56.0371 43.0078 56.0762 42.8711C56.1152 42.7344 56.1787 42.5537 56.2666 42.3291L63.6348 42.5049V44.2188H65.5391V38.5205ZM65.5391 24.4727H62.082V36.5283H65.5391V24.4727ZM84.3916 40H77.1113V20.957H84.3916V40ZM84.3916 14.9512V18.4229H77.1113V14.9512H84.3916ZM98.5566 33.4961C98.4785 33.4082 98.2637 33.3398 97.9121 33.291C97.5605 33.2422 97.126 33.1885 96.6084 33.1299C96.0908 33.0615 95.5146 32.9785 94.8799 32.8809C94.2451 32.7832 93.6006 32.6416 92.9463 32.4561C92.292 32.2705 91.6572 32.0312 91.042 31.7383C90.4268 31.4453 89.8799 31.0742 89.4014 30.625C88.9229 30.1758 88.5371 29.6387 88.2441 29.0137C87.9609 28.3887 87.8193 27.6465 87.8193 26.7871C87.8193 26.1621 87.8682 25.5713 87.9658 25.0146C88.0635 24.4482 88.2344 23.9258 88.4785 23.4473C88.7324 22.9688 89.0791 22.5391 89.5186 22.1582C89.958 21.7676 90.5195 21.4404 91.2031 21.1768C91.8867 20.9033 92.707 20.6934 93.6641 20.5469C94.6211 20.4004 95.749 20.3271 97.0479 20.3271C98.3467 20.3467 99.4551 20.4199 100.373 20.5469C101.291 20.6738 102.058 20.8447 102.673 21.0596C103.298 21.2744 103.791 21.5381 104.152 21.8506C104.523 22.1631 104.802 22.5146 104.987 22.9053C105.183 23.2959 105.305 23.7305 105.354 24.209C105.412 24.6777 105.441 25.1807 105.441 25.7178V26.9775L98.5566 26.5381V24.4727H95.0996V27.2998C95.1875 27.3877 95.4072 27.4609 95.7588 27.5195C96.1201 27.5781 96.5596 27.6465 97.0771 27.7246C97.5947 27.793 98.1709 27.8809 98.8057 27.9883C99.4404 28.0957 100.08 28.2422 100.725 28.4277C101.379 28.6133 102.009 28.8477 102.614 29.1309C103.229 29.4141 103.776 29.7705 104.255 30.2002C104.733 30.6299 105.114 31.1426 105.397 31.7383C105.69 32.334 105.837 33.0322 105.837 33.833C105.837 34.9365 105.71 35.9082 105.456 36.748C105.212 37.5781 104.753 38.2764 104.079 38.8428C103.405 39.3994 102.473 39.8193 101.281 40.1025C100.09 40.3857 98.5518 40.5273 96.667 40.5273C95.3975 40.498 94.3037 40.415 93.3857 40.2783C92.4775 40.1514 91.7109 39.9756 91.0859 39.751C90.4609 39.5264 89.9629 39.2578 89.5918 38.9453C89.2207 38.623 88.9375 38.2666 88.7422 37.876C88.5469 37.4854 88.415 37.0557 88.3467 36.5869C88.2881 36.1182 88.2588 35.6201 88.2588 35.0928V33.9502L95.0996 34.4629V36.5283H98.5566V33.4961ZM117.57 40H110.29V23.8867H108.488V20.957H110.29V16.6357H117.57V20.957H119.973V23.8867H117.57V40ZM141.125 33.3936C141.125 34.0869 141.101 34.7461 141.052 35.3711C141.003 35.9863 140.881 36.5625 140.686 37.0996C140.5 37.627 140.212 38.1006 139.821 38.5205C139.44 38.9404 138.913 39.3018 138.239 39.6045C137.575 39.8975 136.74 40.1221 135.734 40.2783C134.738 40.4443 133.522 40.5273 132.087 40.5273C130.622 40.5273 129.382 40.4395 128.366 40.2637C127.36 40.0879 126.525 39.8535 125.861 39.5605C125.197 39.2676 124.68 38.9307 124.309 38.5498C123.938 38.1592 123.664 37.7539 123.488 37.334C123.312 36.9043 123.205 36.4746 123.166 36.0449C123.137 35.6152 123.122 35.2051 123.122 34.8145V26.0254C123.122 25.6348 123.137 25.2246 123.166 24.7949C123.205 24.3652 123.312 23.9404 123.488 23.5205C123.664 23.1006 123.938 22.7002 124.309 22.3193C124.68 21.9287 125.197 21.5869 125.861 21.2939C126.525 21.001 127.36 20.7666 128.366 20.5908C129.382 20.415 130.622 20.3271 132.087 20.3271C133.513 20.3271 134.729 20.415 135.734 20.5908C136.74 20.7666 137.575 21.001 138.239 21.2939C138.913 21.5869 139.44 21.9287 139.821 22.3193C140.212 22.7002 140.505 23.1006 140.7 23.5205C140.896 23.9404 141.018 24.3701 141.066 24.8096C141.115 25.2393 141.14 25.6445 141.14 26.0254V31.5186H130.402V36.5283H133.859V33.4082L141.125 33.3936ZM130.402 28.9111H133.859V24.4727H130.402V28.9111ZM145.109 40V20.957H150.983L151.804 23.96C151.901 23.4717 152.053 23.042 152.258 22.6709C152.463 22.2998 152.697 21.9824 152.961 21.7188C153.234 21.4453 153.527 21.2207 153.84 21.0449C154.152 20.8691 154.465 20.7324 154.777 20.6348C155.09 20.5273 155.393 20.4541 155.686 20.415C155.979 20.3662 156.237 20.3369 156.462 20.3271V26.0986L152.39 27.2705V40H145.109Z"
                fill=""
                animate={
                    (isClick)
                        ? { scale: 1.6, transition: { duration: 0.65, ease: "anticipate" } }
                        : {}
                }
            />
        </svg>

    )
}

export default RegisterButton;