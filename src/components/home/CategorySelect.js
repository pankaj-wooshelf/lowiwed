import { useState, useRef, useEffect } from "react";
import { Form, Badge } from "react-bootstrap";
import stylesT from "../../styles/Form.module.css";

const CategorySelect = ({ categorieData, formData, setFormData, errors }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const containerRef = useRef(null);

    // check space niche hai ya nahi, agar nahi hai to dropdown upar khule
    useEffect(() => {
        if (showDropdown && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setDropUp(windowHeight - rect.bottom < 220); // 220px ≈ dropdown max-height
        }
    }, [showDropdown]);

    const handleSelect = (id, name) => {
        if (!formData.category.includes(id)) {
            setFormData((prev) => ({
                ...prev,
                category: [...(prev.category || []), id],
                categoryNames: [...(prev.categoryNames || []), name],
            }));
        }
        setShowDropdown(false);
    };

    return (
        <Form.Group
            className={`${errors.category ? "mb-0" : "mb-2"} position-relative`}
            ref={containerRef}
        >
            {/* Input box */}
            <div
                className={`${stylesT.formInput2} border rounded d-flex align-items-center flex-wrap p-2`}
                style={{ cursor: "pointer", minHeight: "45px" }}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                {formData.category.length > 0 ? (
                    formData.category.map((id) => {
                        const cat = categorieData.find((op) => op.id === id);
                        return (
                            <Badge
                                key={id}
                                bg="secondary"
                                className="me-2 mb-1"
                                style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFormData((prev) => ({
                                        ...prev,
                                        category: prev.category.filter((catId) => catId !== id),
                                    }));
                                }}
                            >
                                {cat?.name} ✕
                            </Badge>
                        );
                    })
                ) : (
                    <span className="text-muted">Select Categories</span>
                )}
            </div>

            {/* Dropdown */}
            {showDropdown && (
                <div
                    className={`border rounded mt-1 bg-white position-absolute w-100 custom-scroll`}
                    style={{
                        zIndex: 1000,
                        maxHeight: "200px",
                        overflowY: "auto",
                        top: dropUp ? "auto" : "100%",   // niche khulne ke liye
                        bottom: dropUp ? "100%" : "auto" // upar khulne ke liye
                    }}
                >
                    {categorieData.map((op) => (
                        <div
                            key={op.id}
                            className="p-2 dropdown-item"
                            style={{
                                cursor: "pointer",
                                backgroundColor: formData.category.includes(op.id)
                                    ? "#f1f1f1"
                                    : "white",
                            }}
                            onClick={() => handleSelect(op.id, op.name)}
                        >
                            {op.name}
                        </div>
                    ))}
                </div>
            )}

            {/* Validation */}
            {errors.category && (
                <small className="text-danger" style={{ fontSize: "10px" }}>
                    {errors.category}
                </small>
            )}
        </Form.Group>
    );
};

export default CategorySelect;
