import { Fragment } from "react";
import { Dialog, Transition } from "../../lib/@headlessui";
import { IconButton } from "../../components";
import { XMarkIconMini } from "../../lib/@heroicons";

export function Modal({
  closeModal,
  isOpen,
  children,
  className = "",
  containerClass = "",
  centerTitle = true,
  title = "",
  headerClasses = "",
  closeIconClasses = "",
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex min-h-full items-center justify-center ${containerClass}`}
          >
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              className={"my-24 mx-4"}
            >
              <Dialog.Panel
                data-testid="modal"
                className={`sm:w-[500px]  transform overflow-hidden rounded-lg bg-white p-2 pb-10 text-left align-middle shadow-xl transition-all ${className}`}
              >
                <div
                  className={`relative   flex items-center justify-${
                    centerTitle ? "center" : "start"
                  } ${headerClasses}`}
                >
                  {title && <span className={`text-lg`}>{title}</span>}
                  <IconButton
                    className={`absolute start-1 top-2 text-black  ${closeIconClasses}`}
                    onClick={closeModal}
                    data-testid="modal-close-btn"
                    buttonSize="large"
                  >
                    <XMarkIconMini />
                  </IconButton>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
