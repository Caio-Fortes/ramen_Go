export async function setSVG(element){
     //template
     const setTemplate = () => {
        element.innerHTML = `
        <svg width="66" height="72" viewBox="0 0 66 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0534 69.89C55.0534 69.89 65.4578 70.6149 65.4578 59.0199C65.4578 47.4249 49.996 39.1638 46.9615 39.1638H33.1825H18.4963C15.4618 39.1638 0 47.4249 0 59.0199C0 70.6149 10.4036 69.89 10.4036 69.89H55.0534Z" fill="#FF4E42"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.8413 36.1433C53.9458 35.2893 54.0059 34.4204 54.0059 33.5388C54.0059 21.6863 44.3132 12.0769 32.3564 12.0769C20.4002 12.0769 10.7075 21.6863 10.7075 33.5388C10.7075 34.4822 10.7752 35.4108 10.8947 36.3214C9.71451 36.9787 7.83896 38.4363 8.41478 40.8754C9.23867 44.3614 13.552 44.4069 13.552 44.4069C13.552 44.4069 13.5708 44.348 13.5994 44.2489C17.3392 50.6733 24.3362 55 32.3564 55C40.5539 55 47.6862 50.4825 51.3614 43.8219C51.4561 44.1871 51.5238 44.4069 51.5238 44.4069C51.5238 44.4069 55.8379 44.3614 56.6618 40.8754C57.2977 38.1814 54.9463 36.6866 53.8413 36.1433Z" fill="#FFC024"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7728 56.6499C5.38294 55.2514 2.57057 56.844 2.4531 56.9125C2.09469 57.1227 1.97195 57.5879 2.17375 57.956C2.37555 58.3256 2.83411 58.4558 3.19554 58.2524C3.22039 58.2378 5.66004 56.9094 10.4023 58.1431C15.3689 59.4322 25.0289 66.2559 25.126 66.3244C25.2563 66.4176 25.4061 66.4615 25.5537 66.4615C25.7924 66.4615 26.0273 66.346 26.1734 66.1304C26.4106 65.7808 26.3248 65.301 25.9829 65.0584C25.5786 64.772 16.0022 58.0083 10.7728 56.6499Z" fill="#1820EF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6208 56.9131C62.5033 56.8446 59.6912 55.2506 54.302 56.6506C49.0731 58.0089 39.4977 64.7721 39.0934 65.0585C38.7516 65.3019 38.6665 65.7816 38.9029 66.1304C39.049 66.346 39.2839 66.4615 39.5225 66.4615C39.6709 66.4615 39.8207 66.4176 39.9509 66.3252C40.0481 66.2559 49.7055 59.4334 54.6724 58.1436C59.4172 56.9116 61.8536 58.2391 61.8724 58.2499C62.2353 58.4617 62.6945 58.3331 62.9001 57.9642C63.1071 57.5954 62.9814 57.1241 62.6208 56.9131Z" fill="#1820EF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6105 26.9213C39.0484 28.5006 39.4862 30.08 39.9232 31.6593C40.096 32.284 39.5057 32.801 38.8839 32.667C34.2151 31.6585 30.0345 29.2273 26.8737 25.7986C26.7047 27.822 27.0306 29.8404 27.8191 31.7568C28.1113 32.4668 27.1635 32.983 26.5778 32.6816C22.1613 30.4098 18.4538 27.0262 15.8232 22.9057C15.2494 22.0057 16.7116 21.1837 17.2831 22.0785C19.3805 25.3639 22.2041 28.114 25.5392 30.1841C25.0173 28.0441 25.0113 25.8189 25.5024 23.644C25.6729 22.8875 26.6499 22.9341 27.0471 23.4482C29.7529 26.9548 33.6053 29.4785 37.9121 30.7163C37.3767 28.7861 36.842 26.8543 36.3081 24.9241C36.0805 24.1027 37.1049 23.5981 37.7199 24.1268C41.1278 27.0633 45.1778 29.1618 49.5364 30.3486C48.2162 29.0315 47.1062 27.5271 46.2509 25.8568C45.8792 25.1323 46.6384 24.3285 47.4066 24.7355C50.4105 26.3337 53.702 27.3298 57.1144 27.6458C58.189 27.7448 58.1958 29.3839 57.1144 29.2841C54.3591 29.0293 51.6909 28.3863 49.1601 27.364C50.237 28.8247 51.5452 30.1127 53.0757 31.1656C53.88 31.7197 53.3716 32.8134 52.4238 32.6634C47.3984 31.8653 42.6673 29.8681 38.6105 26.9213ZM44.8971 41.01C44.863 40.8943 44.0132 38.1386 41.5364 38.1386C39.0431 38.1386 38.2054 40.485 38.1705 40.5848C38.0395 40.963 37.6116 41.1705 37.2162 41.0476C36.8193 40.9254 36.6012 40.5204 36.7284 40.1415C37.1283 38.9484 38.6477 36.6924 41.5364 36.6924C45.169 36.6924 46.3096 40.4611 46.3566 40.6217C46.4687 41.0063 46.2324 41.4055 45.8302 41.5125C45.762 41.5299 45.6931 41.5385 45.6257 41.5385C45.2947 41.5385 44.991 41.3296 44.8971 41.01ZM23.5364 36.6924C20.6477 36.6924 19.1283 38.9484 18.7284 40.1415C18.6012 40.5204 18.8193 40.9254 19.2162 41.0476C19.6116 41.1705 20.0395 40.963 20.1705 40.5848C20.2054 40.485 21.0431 38.1386 23.5364 38.1386C26.0132 38.1386 26.863 40.8943 26.8971 41.01C26.991 41.3296 27.2947 41.5385 27.6257 41.5385C27.6931 41.5385 27.762 41.5299 27.8302 41.5125C28.2324 41.4055 28.4687 41.0063 28.3566 40.6217C28.3096 40.4611 27.169 36.6924 23.5364 36.6924ZM32.6208 48.0232C33.0881 48.2898 34.0139 48.6509 34.7474 47.9008C35.0343 47.6073 35.4979 47.6073 35.7847 47.9008C36.0715 48.1944 36.0715 48.6689 35.7847 48.9625C35.1472 49.615 34.4261 49.8462 33.7417 49.8462C32.7998 49.8462 31.9283 49.4085 31.442 49.0286L31.1537 48.8033V40.2124C31.1537 39.7972 31.4816 39.4616 31.8872 39.4616C32.2922 39.4616 32.6208 39.7972 32.6208 40.2124V48.0232Z" fill="#1820EF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2828 6.00779C17.6167 7.32822 19.2017 8.67156 20.6906 10.0378C21.6277 10.8979 23.1379 10.0312 22.7968 8.82526L21.1423 2.98269C20.9103 2.16324 19.9091 1.81226 19.1895 2.2992L16.4698 4.13983C15.8257 4.57504 15.7341 5.46543 16.2828 6.00779Z" fill="#FF4E42"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4088 6.00779C46.0756 7.32822 44.4905 8.67156 43.0016 10.0378C42.0637 10.8979 40.5541 10.0312 40.8953 8.82526L42.5498 2.98269C42.7818 2.16324 43.783 1.81226 44.5027 2.2992L47.2226 4.13983C47.8659 4.57504 47.9583 5.46543 47.4088 6.00779Z" fill="#FF4E42"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7976 1.66702C30.1849 3.4793 30.7618 5.44236 31.2501 7.37496C31.5573 8.59008 33.2153 8.62945 33.5651 7.42547L35.2563 1.59052C35.4943 0.771282 34.8726 -0.0435011 34.0432 0.00180593L30.9125 0.168922C30.1719 0.20903 29.6375 0.920573 29.7976 1.66702Z" fill="#FF4E42"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0485 64.4647C45.605 65.0702 46.3805 68.7677 46.3805 68.7677C46.5389 69.3039 41.8229 70.3456 41.8229 70.3456C39.5214 71.0021 36.4368 71.4689 34.5454 71.2552C32.6555 71.0422 33.0249 68.8772 34.2601 67.8625C34.3866 67.7587 34.5314 67.6344 34.6933 67.4953C36.1151 66.2742 38.8549 63.9212 42.0485 64.4647ZM23.0281 64.4647C19.4716 65.0702 18.696 68.7677 18.696 68.7677C18.5377 69.3039 23.2537 70.3456 23.2537 70.3456C25.5551 71.0021 28.6397 71.4689 30.5312 71.2552C32.4211 71.0422 32.0517 68.8772 30.8165 67.8625C30.69 67.7587 30.5452 67.6344 30.3833 67.4953C28.9615 66.2742 26.2216 63.9212 23.0281 64.4647Z" fill="#FFC024"/>
        </svg>`
     }
 
     //mounted
     setTemplate();
}
