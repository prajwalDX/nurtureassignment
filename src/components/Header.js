import React from 'react'
import './Header.css'
import profile_img from './images.jpg'

export default function Header() {
    return (
        <div className="bk-pink pd-0-4-1">
            <div className="container flx-row al-cntr">            
                <div className="flx-row flx-one">
                    <span className="logo-icon"></span>
                    <h2 className="logo">Logo</h2>
                </div>
                <div className="flx-row jus-sp-evenly flx-two ">
                    <h2 className="label ">Dashboard</h2>
                    <h2 className="label active line">Find Experts</h2>
                    <h2 className="label ">Discussion</h2>
                </div>
                <div className="flx-row flx-one al-cntr jus-con-cntr">
                    <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 0.666748C5.5453 0.666748 3.3333 2.37675 3.3333 4.66675V7.69275C3.3333 8.12056 3.20664 8.53881 2.9693 8.89475L1.50264 11.0941C1.40115 11.2466 1.34296 11.4237 1.33427 11.6067C1.32558 11.7897 1.3667 11.9716 1.45327 12.133C1.53983 12.2944 1.66859 12.4293 1.8258 12.5233C1.98302 12.6173 2.1628 12.6669 2.34597 12.6667H5.66664C5.66664 12.9732 5.72699 13.2766 5.84425 13.5597C5.96151 13.8428 6.13338 14.1 6.35005 14.3167C6.56672 14.5333 6.82395 14.7052 7.10704 14.8225C7.39013 14.9397 7.69355 15.0001 7.99997 15.0001C8.30639 15.0001 8.6098 14.9397 8.8929 14.8225C9.17599 14.7052 9.43322 14.5333 9.64989 14.3167C9.86656 14.1 10.0384 13.8428 10.1557 13.5597C10.2729 13.2766 10.3333 12.9732 10.3333 12.6667H13.6546C13.8378 12.6667 14.0175 12.617 14.1747 12.5229C14.3318 12.4288 14.4604 12.2938 14.5468 12.1323C14.6333 11.9708 14.6742 11.7888 14.6654 11.6059C14.6566 11.4229 14.5982 11.2458 14.4966 11.0934L13.03 8.89475C12.7929 8.53873 12.6664 8.1205 12.6666 7.69275V4.66675C12.6666 2.37675 10.454 0.666748 7.99997 0.666748ZM4.3333 4.66675C4.3333 3.09075 5.92197 1.66675 7.99997 1.66675C10.078 1.66675 11.6666 3.09075 11.6666 4.66675V7.69275C11.6666 8.31808 11.852 8.92875 12.1986 9.44941L13.6646 11.6487C13.666 11.6507 13.6667 11.653 13.6666 11.6554L13.666 11.6594L13.6633 11.6634L13.6593 11.6661L13.6546 11.6667H2.3453L2.34064 11.6661L2.33664 11.6634L2.33397 11.6594L2.3333 11.6547L2.3353 11.6481L3.80197 9.44941C4.1486 8.92914 4.33348 8.31791 4.3333 7.69275V4.66675ZM9.3333 12.6667H6.66664C6.66664 13.0204 6.80711 13.3595 7.05716 13.6096C7.30721 13.8596 7.64635 14.0001 7.99997 14.0001C8.35359 14.0001 8.69273 13.8596 8.94278 13.6096C9.19283 13.3595 9.3333 13.0204 9.3333 12.6667Z" fill="#f59a73"/>
                    </svg>
                    <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00004 8.00008C8.36823 8.00008 8.66671 7.7016 8.66671 7.33341C8.66671 6.96522 8.36823 6.66675 8.00004 6.66675C7.63185 6.66675 7.33337 6.96522 7.33337 7.33341C7.33337 7.7016 7.63185 8.00008 8.00004 8.00008Z" fill="#f59a73"/>
                        <path d="M10.6667 8.00008C11.0349 8.00008 11.3333 7.7016 11.3333 7.33341C11.3333 6.96522 11.0349 6.66675 10.6667 6.66675C10.2985 6.66675 10 6.96522 10 7.33341C10 7.7016 10.2985 8.00008 10.6667 8.00008Z" fill="#f59a73"/>
                        <path d="M5.33341 8.00008C5.7016 8.00008 6.00008 7.7016 6.00008 7.33341C6.00008 6.96522 5.7016 6.66675 5.33341 6.66675C4.96522 6.66675 4.66675 6.96522 4.66675 7.33341C4.66675 7.7016 4.96522 8.00008 5.33341 8.00008Z" fill="#f59a73"/>
                        <path d="M12.6667 2H3.33337C2.80294 2 2.29423 2.21071 1.91916 2.58579C1.54409 2.96086 1.33337 3.46957 1.33337 4V14C1.33358 14.1181 1.36517 14.2341 1.42491 14.336C1.48465 14.4379 1.5704 14.5221 1.67337 14.58C1.77301 14.6365 1.88552 14.6663 2.00004 14.6667C2.1197 14.6666 2.23714 14.6344 2.34004 14.5733L5.33337 12.76C5.44402 12.6941 5.57137 12.6617 5.70004 12.6667H12.6667C13.1971 12.6667 13.7058 12.456 14.0809 12.0809C14.456 11.7058 14.6667 11.1971 14.6667 10.6667V4C14.6667 3.46957 14.456 2.96086 14.0809 2.58579C13.7058 2.21071 13.1971 2 12.6667 2ZM13.3334 10.6667C13.3334 10.8435 13.2631 11.013 13.1381 11.1381C13.0131 11.2631 12.8435 11.3333 12.6667 11.3333H5.70004C5.33592 11.333 4.97863 11.4322 4.66671 11.62L2.66671 12.82V4C2.66671 3.82319 2.73695 3.65362 2.86197 3.5286C2.98699 3.40357 3.15656 3.33333 3.33337 3.33333H12.6667C12.8435 3.33333 13.0131 3.40357 13.1381 3.5286C13.2631 3.65362 13.3334 3.82319 13.3334 4V10.6667Z" fill="#f59a73"/>
                    </svg>
                    <img className="profile-img" src={profile_img} alt=""/>
                    <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00002 10.6668C7.84425 10.6671 7.6933 10.6128 7.57335 10.5134L3.57335 7.1801C3.43721 7.06694 3.35159 6.90434 3.33534 6.72805C3.31909 6.55177 3.37353 6.37625 3.48669 6.2401C3.59985 6.10396 3.76245 6.01834 3.93874 6.00209C4.11502 5.98584 4.29054 6.04028 4.42669 6.15344L8.00002 9.1401L11.5734 6.2601C11.6415 6.20473 11.72 6.16337 11.8042 6.13842C11.8885 6.11346 11.9768 6.1054 12.0641 6.11469C12.1515 6.12398 12.2361 6.15045 12.3132 6.19257C12.3903 6.23468 12.4583 6.29162 12.5134 6.3601C12.5744 6.42865 12.6206 6.50907 12.6492 6.59632C12.6777 6.68357 12.6879 6.77577 12.6791 6.86714C12.6704 6.95852 12.6428 7.0471 12.5983 7.12734C12.5537 7.20757 12.493 7.27774 12.42 7.33344L8.42002 10.5534C8.29663 10.6371 8.14876 10.677 8.00002 10.6668V10.6668Z" fill="#f59a73"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
