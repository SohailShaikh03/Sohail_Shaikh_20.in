import React, { useState, useEffect } from "react";
import { sound } from "../utils/sound";
import {
  Plus,
  Star,
  Heart,
  MessageSquare,
  CheckCircle2,
  X,
  Send,
  Trash2
} from "lucide-react";

// Clean, pleasant post-it note palettes
const COLOR_THEMES = [
  {
    id: "amber",
    name: "Classic Amber",
    bgClass: "bg-[#fffbeb] border-[#fde68a] text-[#78350f]",
    headerBg: "bg-[#fef3c7] text-[#92400e]",
    starColor: "text-[#d97706]"
  },
  {
    id: "rose",
    name: "Rose Pink",
    bgClass: "bg-[#fff1f2] border-[#fecdd3] text-[#9f1239]",
    headerBg: "bg-[#ffe4e6] text-[#be123c]",
    starColor: "text-[#e11d48]"
  },
  {
    id: "emerald",
    name: "Mint Emerald",
    bgClass: "bg-[#f0fdf4] border-[#bbf7d0] text-[#166534]",
    headerBg: "bg-[#dcfce7] text-[#15803d]",
    starColor: "text-[#16a34a]"
  },
  {
    id: "cyan",
    name: "Sky Cyan",
    bgClass: "bg-[#f0f9ff] border-[#bae6fd] text-[#075985]",
    headerBg: "bg-[#e0f2fe] text-[#0369a1]",
    starColor: "text-[#0284c7]"
  },
  {
    id: "violet",
    name: "Lilac Violet",
    bgClass: "bg-[#faf5ff] border-[#e9d5ff] text-[#6b21a8]",
    headerBg: "bg-[#f3e8ff] text-[#7e22ce]",
    starColor: "text-[#9333ea]"
  },
  {
    id: "dark",
    name: "Dark Slate",
    bgClass: "bg-[#1c1b18] border-[#33312b] text-[#f3f2ed]",
    headerBg: "bg-[#292723] text-[#f0a04b]",
    starColor: "text-[#f0a04b]"
  }
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(() => {
    try {
      const stored = localStorage.getItem("sohail_portfolio_user_reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore
    }
    return [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Form State
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedTheme, setSelectedTheme] = useState("amber");
  const [formError, setFormError] = useState("");

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("sohail_portfolio_user_reviews", JSON.stringify(reviews));
    } catch {
      // Ignore
    }
  }, [reviews]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLike = (id) => {
    sound.playTick();
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: (r.likes || 0) + 1 } : r))
    );
  };

  const handleDelete = (id) => {
    sound.playClick();
    setReviews((prev) => prev.filter((r) => r.id !== id));
    showToast("Review deleted.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!message.trim()) {
      setFormError("Please enter a review message.");
      return;
    }

    sound.playSuccess();
    const newReview = {
      id: "rev-" + Date.now(),
      author: author.trim(),
      role: role.trim() || "Peer Reviewer",
      message: message.trim(),
      rating: rating,
      theme: selectedTheme,
      likes: 1,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };

    setReviews((prev) => [newReview, ...prev]);
    setIsModalOpen(false);
    setAuthor("");
    setRole("");
    setMessage("");
    setRating(5);
    setFormError("");
    showToast("✓ Thank you! Your review has been added to the board.");
  };

  return (
    <section className="font-mono flex flex-col gap-6 animate-fadeIn pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1b18] text-[#f3f2ed] border-2 border-[#d4701a] px-5 py-3 rounded-md shadow-2xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#f0a04b]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-[#fbfaf6] dark:bg-[#191815] border-2 border-[#1c1b18] dark:border-[#38352e] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[4px_4px_0px_0px_#1c1b18] dark:shadow-[4px_4px_0px_0px_#38352e]">
        <div className="flex flex-col gap-2 max-w-[720px]">
          <div className="flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b]">
            <span className="w-2 h-2 rounded-full bg-[#d4701a] animate-pulse" />
            <span>COMMUNITY FEEDBACK & REVIEWS</span>
          </div>

          <h2 className="m-0 font-display font-black text-[clamp(40px,5.5vw,68px)] leading-[0.95] uppercase tracking-wide text-[#1c1b18] dark:text-white">
            Reviews & Testimonials
          </h2>

          <p className="m-0 text-[15px] leading-relaxed text-[#66625a] dark:text-[#a09c91]">
            Have we worked together, reviewed code, or collaborated on a project?
            Leave an honest review or message on my portfolio. All feedback submitted here appears live on this board.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            sound.playClick();
            setIsModalOpen(true);
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1c1b18] dark:bg-[#f3f2ed] text-[#f3f2ed] dark:text-[#1c1b18] border-2 border-[#1c1b18] dark:border-[#f3f2ed] hover:bg-[#d4701a] dark:hover:bg-[#d4701a] dark:hover:text-white hover:border-[#d4701a] font-mono font-bold tracking-[0.14em] text-[13px] uppercase shadow-[4px_4px_0px_0px_rgba(212,112,26,0.4)] active:translate-y-0.5 transition-all flex-none"
        >
          <Plus className="w-4 h-4 text-[#f0a04b] dark:text-[#b45a12]" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Reviews Summary Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#1c1b18] dark:border-[#38352e] pb-3 text-[12px] text-[#66625a] dark:text-[#a09c91] uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#1c1b18] dark:text-[#f3f2ed]">
            {reviews.length} {reviews.length === 1 ? "REVIEW" : "REVIEWS"} ON RECORD
          </span>
          {reviews.length > 0 && (
            <span>
              • AVERAGE RATING:{" "}
              {(
                reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length
              ).toFixed(1)}{" "}
              ★
            </span>
          )}
        </div>
        <div className="text-[11px] text-[#a39d8e] dark:text-[#736e63]">
          [VISITOR FEEDBACK BOARD]
        </div>
      </div>

      {/* Reviews Grid or Empty State */}
      {reviews.length === 0 ? (
        /* Empty State */
        <div className="p-12 sm:p-16 border-2 border-dashed border-[#cfcabb] dark:border-[#38352e] bg-[#fbfaf6] dark:bg-[#191815] text-center flex flex-col items-center justify-center gap-4 my-2">
          <div className="w-14 h-14 rounded-full bg-[#eae8e0] dark:bg-[#25231e] border-2 border-[#1c1b18] dark:border-[#38352e] flex items-center justify-center text-[#d4701a]">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div className="max-w-[480px]">
            <h3 className="m-0 font-display font-bold text-2xl uppercase tracking-wide text-[#1c1b18] dark:text-white">
              No Reviews Posted Yet
            </h3>
            <p className="mt-2 text-[14.5px] text-[#66625a] dark:text-[#a09c91] leading-relaxed">
              Be the first colleague, teammate, or recruiter to leave a review or endorsement on my portfolio.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setIsModalOpen(true);
            }}
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#1c1b18] bg-[#1c1b18] text-[#f3f2ed] hover:bg-[#d4701a] hover:border-[#d4701a] font-mono text-xs uppercase font-bold tracking-wider shadow-sm transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-[#f0a04b]" />
            <span>Write the First Review</span>
          </button>
        </div>
      ) : (
        /* Reviews Card Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {reviews.map((rev) => {
            const theme =
              COLOR_THEMES.find((t) => t.id === rev.theme) || COLOR_THEMES[0];
            return (
              <div
                key={rev.id}
                className={`flex flex-col justify-between p-5 rounded-lg border-2 shadow-[4px_4px_0px_0px_#1c1b18] transition-all hover:-translate-y-1 ${theme.bgClass}`}
              >
                {/* Card Top: Rating & Date */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-current/15 text-xs">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 fill-current ${theme.starColor}`}
                        />
                      ))}
                    </div>
                    <span className="opacity-70 text-[11px] font-mono">
                      {rev.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="my-4 text-[15px] leading-relaxed font-sans font-medium">
                    "{rev.message}"
                  </p>
                </div>

                {/* Card Bottom: Author & Reactions */}
                <div className="pt-3 border-t border-current/15 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="font-bold truncate text-[13.5px]">
                      {rev.author}
                    </div>
                    <div className="opacity-75 text-[11.5px] truncate font-mono">
                      {rev.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-none">
                    <button
                      onClick={() => handleLike(rev.id)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-black/5 hover:bg-black/10 transition-colors"
                      title="Like this review"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                      <span className="font-bold text-[11px]">{rev.likes || 1}</span>
                    </button>
                    <button
                      onClick={() => handleDelete(rev.id)}
                      className="p-1 text-current/40 hover:text-red-600 transition-colors"
                      title="Delete review"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ================= SIMPLE WRITE A REVIEW MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#fbfaf6] dark:bg-[#1a1916] text-[#1c1b18] dark:text-[#f3f2ed] border-2 border-[#1c1b18] dark:border-[#38352e] shadow-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 rounded-sm">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#1c1b18] dark:border-[#38352e] pb-3">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b]">
                  PUBLIC TESTIMONIAL FORM
                </div>
                <h3 className="m-0 font-display font-black text-2xl uppercase tracking-wide text-[#1c1b18] dark:text-white">
                  Write a Review
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setIsModalOpen(false);
                }}
                className="p-1.5 border border-[#1c1b18] dark:border-[#38352e] text-[#1c1b18] dark:text-[#f3f2ed] hover:bg-[#1c1b18] dark:hover:bg-white hover:text-[#f3f2ed] dark:hover:text-[#1c1b18] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm font-mono">
              {formError && (
                <div className="bg-red-50 border border-red-500 text-red-700 px-3 py-2 text-xs font-semibold">
                  [ERROR]: {formError}
                </div>
              )}

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-[#1c1b18] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 border-2 border-[#1c1b18] bg-white text-sm focus:outline-none focus:border-[#d4701a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-[#1c1b18] mb-1">
                    Role / Context
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Colleague, Recruiter"
                    className="w-full px-3 py-2 border-2 border-[#1c1b18] bg-white text-sm focus:outline-none focus:border-[#d4701a]"
                  />
                </div>
              </div>

              {/* Rating Selector */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-[#1c1b18] mb-1">
                  Rating: {rating} / 5 Stars
                </label>
                <div className="flex items-center gap-1.5 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        sound.playTick();
                        setRating(star);
                      }}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= rating
                            ? "text-[#f0a04b] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Theme Selector */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-[#1c1b18] mb-1.5">
                  Card Theme:
                </label>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap gap-1.5 sm:gap-2">
                  {COLOR_THEMES.map((thm) => (
                    <button
                      key={thm.id}
                      type="button"
                      onClick={() => {
                        sound.playTick();
                        setSelectedTheme(thm.id);
                      }}
                      className={`px-2.5 py-1 text-xs border rounded flex items-center gap-1.5 transition-all ${
                        selectedTheme === thm.id
                          ? "border-[#1c1b18] font-bold ring-2 ring-[#d4701a] bg-white"
                          : "border-[#cfcabb] bg-[#fbfaf6] text-[#66625a]"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full border border-black/20 ${thm.bgClass}`}
                      />
                      <span>{thm.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-[#1c1b18]">
                    Review Message *
                  </label>
                  <span className="text-[11px] text-[#a39d8e]">
                    {message.length}/250
                  </span>
                </div>
                <textarea
                  required
                  maxLength={250}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your honest review, experience, or recommendation..."
                  className="w-full p-3 border-2 border-[#1c1b18] bg-white text-sm focus:outline-none focus:border-[#d4701a]"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border-2 border-[#cfcabb] hover:border-[#1c1b18] text-[#66625a] hover:text-[#1c1b18] text-xs uppercase font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1c1b18] text-[#f3f2ed] border-2 border-[#1c1b18] hover:bg-[#d4701a] hover:border-[#d4701a] text-xs uppercase font-bold tracking-wider shadow-sm flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#f0a04b]" />
                  <span>Post Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
